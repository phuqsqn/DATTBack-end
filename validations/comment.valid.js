const joi = require('joi');

const commentSchema = joi.object({
  content: joi
    .string()
    .min(10)
    .message('Tên Quá Ngắn')
    .max(30)
    .message('Tên Quá Dài')
    .required(),
  start: joi.string().required(),
  account: joi.string().required(), // cái này cần gì chuyền đâu, xóa đi, cái e cần truyền là gì, là account
});
function commentValid(comment) {
  return commentSchema.validate(comment);
}
module.exports = commentValid;

/*
đây này, cái body em truyền là cái này
{
    "content": "phus224222ss2",
    "start": "123121s2s23s",
    "account":"64e07d16ae43b731ec60dcca"
}

*/
