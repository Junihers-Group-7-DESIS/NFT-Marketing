import database from '../../lib/database'
import nc from 'next-connect'

async function insertnft(db, { name, description, fileUrl, price }) {
  let nftrow = {
    name: name,
    description: description,
    _id: fileUrl,
    price: price,
    createdAt: new Date(),
  }
  const { insertedId } = await db.collection('nftdata').insertOne(nftrow)
  nftrow._id = insertedId
  return nftrow
}

async function updatenft(db, id, updates) {
  let updatedId = await db.collection('nftdata').updateOne({ _id: id }, { $set: updates })
  return updatedId
}


async function findByUrl(db, fileUrl) {
  let rows = await db
    .collection('nftdata')
    .aggregate([
      { $match: { _id: fileUrl } },
      { $limit: 1 },
    ])
    .toArray();
  if (!rows[0]) return null
  return rows[0]
}

const ncOpts = {
  onError(err, req, res) {
    console.error(err);
    res.statusCode =
      err.status && err.status >= 100 && err.status < 600 ? err.status : 500;
    res.json({ message: err.message });
  },
}

const handler = nc(ncOpts)
handler.use(database)

handler.get(async (req, res) => {
  let meta = await findByUrl(
    req.db,
    req.query.fileUrl
  )
  res.json({ meta });
})

handler.post(async (req, res) => {
  let row = {}
  let body = JSON.parse(req.body)
  if (body['is_update']) {
    delete body['is_update']
    row = await updatenft(req.db, body["id"], body)
  } else {
    row = await insertnft(req.db, {
      name: body['name'],
      description: body['description'],
      fileUrl: body['fileUrl'],
      price: body['price']
    })
  }
  return res.json(row)
})

export default handler