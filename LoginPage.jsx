import React, { useState } from "react";
import "./styles/LoginPage.css";

function LoginPage({ onLoginSuccess }) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        if (userName === "admin" && password === "admin") {
            onLoginSuccess("admin");
        } else if (userName === "guest" && password === "guest") {
            onLoginSuccess("guest");
        } else {
            alert("로그인 실패: 올바른 ID와 비밀번호를 입력해주세요.");
        }
        /*
        try {
            // 백엔드 API 호출
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    memberId: userName,
                    memberPw: password,
                }),
            });

            // 응답 JSON 파싱
            const data = await response.json();

            // 백엔드에서 정의한 status값에 따라 분기
            // 0: 로그인 실패, 1: 관리자 로그인 성공, 2: 게스트 로그인 성공
            if (data.status === 0) {
                alert("로그인 실패: 회원 정보가 없습니다.");
            } else if (data.status === 1) {
                // 관리자 로그인 성공
                // 필요하다면 data.memberName, data.memberGrade 등에 대한 추가 로직을 작성
                onLoginSuccess("admin");
            } else if (data.status === 2) {
                // 게스트 로그인 성공
                onLoginSuccess("guest");
            } else {
                alert("알 수 없는 응답입니다. 관리자에게 문의하세요.");
            }
        } catch (error) {
            console.error("로그인 요청 중 오류 발생:", error);
            alert("로그인에 실패했습니다. 잠시 후 다시 시도해주세요.");
        }
        */
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input 
                    type="text" 
                    id="userName" 
                    name="userName" 
                    placeholder="Username" 
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required 
                />
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
