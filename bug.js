```javascript
// Incorrect usage of $inc operator in MongoDB update query
db.collection.updateOne({"_id": 1}, {"$inc": {"field": "value"}});
```