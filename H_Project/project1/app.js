const express = require('express');
const path = require('path');
const app = express();

// 정적 파일을 제공할 폴더 설정
app.use(express.static(path.join(__dirname, 'public')));

// HTML 파일 제공
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
