import React, {useState} from 'react'
import { Button, Container, TextField, Typography, Paper } from '@mui/material'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        if (!username || !password) {
            setError('아이디/비밀번호를 입력해주세요.');
            return;
        }

        const testUsername = 'test';
        const testPassword = '1234';

        try {
            // const response = await fetch('https://example.com/api/login', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         username,
            //         password,
            //     }),
            // });
        
            // const data = await response.json();
            
            // if (data.success) {
            // // 로그인 성공 시
            // alert('Login successful!');
            // // 로그인 후 리디렉션 등을 구현할 수 있음
            // } else {
            // // 로그인 실패 시
            // setError('Invalid username or password');
            // }
            if (username === testUsername && password === testPassword) {
                alert('로그인 성공');
                setError(''); 
            } else {
                setError('아이디/비밀번호를 확인하세요.');
            }

        } catch (error) {
            setError('Error logging in. Please try again later.');
        }
    }

    return (
        <Container maxWidth="xs" sx={{ mt: 8 }}>
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom fontWeight="bold" fontFamily="'Segoe UI', sans-serif">
                Instagram
            </Typography>
            {error && <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>}
            <TextField
                fullWidth
                label="사용자 이름"
                margin="normal"
                variant="outlined"
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                fullWidth
                label="비밀번호"
                margin="normal"
                type="password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 2, mb: 1 }}
                onClick={handleLogin}
            >
                로그인
            </Button>
            <Typography variant="body2" color="text.secondary">
                <span style={{ color: '#1976d2', cursor: 'pointer' }}>비밀번호를 잊으셨나요?</span>
            </Typography>
            </Paper>

            <Paper elevation={1} sx={{ mt: 2, p: 2, textAlign: 'center' }}>
            <Typography variant="body2">
                아직 계정이 없으신가요? <span style={{ color: '#1976d2', cursor: 'pointer' }}>회원가입</span>
            </Typography>
            </Paper>
        </Container>
    );
}

export default Login
