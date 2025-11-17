const express = require('express');
const router = express.Router();

// Corrected typo (router.get instead of roughter.get) and added a response
router.get('/data', (req, res) => {
    res.status(200).json({
        data: [
    'https://cdn.pixabay.com/photo/2021/01/06/07/32/leaf-5893399_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/06/02/09/27/sunset-6303992_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/17/20/59/vines-7859445_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/01/06/07/32/leaf-5893399_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/06/02/09/27/sunset-6303992_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/17/20/59/vines-7859445_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/01/06/07/32/leaf-5893399_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/06/02/09/27/sunset-6303992_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/17/20/59/vines-7859445_1280.jpg',
] // Example data
    });
});

module.exports = router;
