const Joi = require("joi");

const validaDadosMiddleware = (schema, property) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body.info, {abortEarly: false});
    const valid = error == null;
    if (valid) {
      next();
    } else {
      const { details } = error;
      console.log(details)
      const message = details.map((i) => i.message).join(",");
      //console.log("error", message);
      res.status(422).json({ error: message });
    }
  };
};
module.exports = validaDadosMiddleware;
