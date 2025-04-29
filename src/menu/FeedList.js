import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Card, CardContent, Divider, Button } from "@mui/material";


function App() {
    const [feeds, setFeeds] = useState([]);
    const [refreshKey, setRefreshKey] = useState(0);

    const navigate = useNavigate();
    
    useEffect(()=>{
        fetch("http://localhost:3005/feed")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setFeeds(data.list);
        });
    },[refreshKey]);
    const fnRemove = (id)=>{
        if(!window.confirm("정말 삭제하시겠습니까?")){
            return;
        }
        fetch("http://localhost:3005/feed/"+id, {
            method : "DELETE",
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
            <Divider sx={{ mb: 2 }} />
            {feeds.map(feed => (
                <Card key={feed.id} sx={{ mb: 2 }}>
                    <CardContent>
                        <Typography variant="h6">{feed.userName}</Typography>
                        <Typography variant="body1">{feed.content}</Typography>
                        <Typography variant="caption" color="text.secondary">
                            {new Date(feed.cdatetime).toLocaleString()}
                        </Typography>
                        <Button variant="outlined" size="small" onClick={()=>{navigate("/feedEdit?id="+feed.id);}}>수정</Button>
                        <Button variant="outlined" size="small" onClick={()=>{fnRemove(feed.id)}}>삭제</Button>
                    </CardContent>
                </Card>
            ))}
            <Button onClick={()=>{navigate("/feedEdit");}}>글쓰기</Button>
        </Container>
    )
}

export default App