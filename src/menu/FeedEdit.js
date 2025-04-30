import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import {Container, TextField, Button, Typography, Box, Divider } from "@mui/material";

function App() {
  const [userId, setUserId] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  
  useEffect(()=>{
    if(id){
      console.log(id);
      fetch("http://localhost:3005/feed/"+id)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setUserId(data.info.userId);
          setContent(data.info.content);
          // imgNo,imgPath 가져와서 넣기
        });
    }
  },[]);

  const handleSubmit = () => {
    if (!userId || !content) return alert("모든 항목을 입력해주세요.");

    let feedInfo = {userId, content}
    const formData = new FormData();
    formData.append('feedInfo', JSON.stringify(feedInfo));
    images.forEach((img) => formData.append('feedImages', img));

    const method = id ? "PUT" : "POST";
    const url = id ? "http://localhost:3005/feed/" + id : "http://localhost:3005/feed";

    fetch(url, {
      method : method,
      body : formData,
    })
      .then(res=>res.json())
      .then(data => {
          alert(data.message);
          navigate("/feed");
      })
  };
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    const previews = files.map(file => URL.createObjectURL(file));
    setPreviewUrls(previews);
  };
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>피드 등록</Typography>
      <Divider sx={{ mb: 2 }} />
      <Box display="flex" flexWrap="wrap" gap={2} mb={2}>
        {previewUrls.map((url, index) => (
          <img key={index} src={url} alt={`preview-${index}`} style={{ width: 100, height: 100, objectFit: 'cover' }} />
        ))}
      </Box>
      {id ? <TextField
        disabled
        label="작성자 ID"
        variant="outlined"
        fullWidth
        margin="normal"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      /> : <TextField
        label="작성자 ID"
        variant="outlined"
        fullWidth
        margin="normal"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />}
      <TextField
        label="내용"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button
        variant="outlined"
        component="label"
        sx={{ mt: 2 }}
      >
        이미지 선택
        <input
          type="file"
          accept="image/*"
          multiple
          hidden
          onChange={handleImageChange}
        />
      </Button>
      <Box mt={3}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {id?'수정':'등록'}
        </Button>
      </Box>
    </Container>
  )
}
  
  export default App