const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articlesSchema = new Schema({
    title: String,
    description: String,
    ogImgUrl: String,
    keywords: String,
    text: {
        t1: String,
        t2: String,
        t3: String,
        t4: String,
        t5: String,
        t6: String,
        t7: String,
        t8: String,
        t9: String,
        t10: String,
        t11: String,
        t12: String,
        t13: String,
        t14: String,
        t15: String,
        t16: String,
        t17: String,
        t18: String,
        t19: String,
        t20: String,
        t21: String,
        t22: String,
        t23: String,
        t24: String,
        t25: String,
        t26: String,
        t27: String,
        t28: String,
        t29: String,
        t30: String,
        t31: String,
        t32: String,
        t33: String,
        t34: String,
        t35: String,
        t36: String,
        t37: String,
        t38: String,
        t39: String,
        t40: String,
        t41: String,
        t42: String,
        t43: String,
        t44: String,
        t45: String,
        t46: String,
        t47: String,
        t48: String,
        t49: String,
        t50: String,
        t51: String,
        t52: String,
        t53: String,
        t54: String,
        t55: String,
        t56: String,
        t57: String,
        t58: String,
        t59: String,
        t60: String,
        tags: Array
    },
    id: String
});

const articlesModel = mongoose.model('Articles', articlesSchema);

module.exports = articlesModel;