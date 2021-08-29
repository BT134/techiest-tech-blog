const router = require('express').Router();
const categoryRoutes = require('./user-routes');
const productRoutes = require('./post-routes');
const tagRoutes = require('./comment-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
