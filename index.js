const Transform = require('stream').Transform;

class BoatTransform extends Transform {
	_transform(chunk, enc, next) {
		const string = chunk.toString().replace(/boat/ig,"⛵️");
		this.push(string);
		next();
	}
}

module.exports = BoatTransform;
