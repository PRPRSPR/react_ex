import React, { useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { Container, Typography, Card, CardContent, Divider, Button, Stack, Box } from "@mui/material";

function App() {
    const [feeds, setFeeds] = useState([]);
    const [refreshKey, setRefreshKey] = useState(0);
    const [listFlg, setListFlg] = useState(false);

    const token = localStorage.getItem("token");
    const dToken = jwtDecode(token);
    console.log("dToken >> ", dToken);

    const navigate = useNavigate();
    
    
    useEffect(()=>{
        let url = "http://localhost:3005/feed";
        if(listFlg){
            url += "?userId="+dToken.userId;
        }
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const grouped = [];
            data.list.forEach(item => {
                const existing = grouped.find(feed => feed.id === item.id);
                if (existing) {
                    if (item.imgPath) existing.imgList.push(item.imgPath);
                } else {
                    grouped.push({
                        ...item,
                        imgList: item.imgPath ? [item.imgPath] : []
                    });
                }
            });
            setFeeds(grouped);
            console.log(grouped);
        });
    },[refreshKey]);
    const fnRemove = (id)=>{
        if(!window.confirm("정말 삭제하시겠습니까?")){
            return;
        }
        fetch("http://localhost:3005/feed/"+id, {
            method : "DELETE",
            headers : {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert("삭제되었습니다");
            setRefreshKey(prev => prev+1);
        });
    }
    
    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>피드 목록</Typography>
            <Button onClick={()=>{navigate("/feedEdit");}}>글쓰기</Button>
            <Button onClick={()=>{setListFlg(!listFlg); setRefreshKey(prev => prev+1);}}>{listFlg? '전체 피드 보기':'내 피드만 보기'}</Button>
            <Divider sx={{ mb: 2 }} />
            {feeds.map(feed => (
                <Card key={feed.id} sx={{ mb: 2 }}>
                    <CardContent>
                        {feed.imgList && feed.imgList.length > 0 && (
                            <Box mt={2}>
                                <Slider dots={true} infinite={false} speed={500} slidesToShow={1} slidesToScroll={1}>
                                    {feed.imgList.map((img, index) => (
                                        <Box key={index} sx={{ textAlign: "center" }}>
                                            <img
                                                src={`http://localhost:3000${img}`}
                                                alt={`피드 이미지 ${index}`}
                                                style={{ width: "100%", maxHeight: 300, objectFit: "contain", borderRadius: 8 }}
                                            />
                                        </Box>
                                    ))}
                                </Slider>
                            </Box>
                        )}
                        <Typography variant="h6">{feed.userName}</Typography>
                        <Typography variant="body1">{feed.content}</Typography>
                        <Typography variant="caption" color="text.secondary">
                            {new Date(feed.cdatetime).toLocaleString()}
                        </Typography>
                        {feed.userId == dToken.userId ? <Stack spacing={1} direction="row">
                            <Button variant="outlined" size="small" onClick={()=>{navigate("/feedEdit?id="+feed.id);}}>수정</Button>
                            <Button variant="outlined" size="small" onClick={()=>{fnRemove(feed.id)}}>삭제</Button>
                        </Stack>:''}
                    </CardContent>
                </Card>
            ))}
        </Container>
    )
}

export default App