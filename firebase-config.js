// Firebase 설정 파일
// Firebase 콘솔에서 복사한 설정 코드를 여기에 붙여넣으세요

// 예시 설정 (실제 값으로 교체 필요)
const firebaseConfig = {
  apiKey: "your-api-key-here",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};

// Firebase 초기화
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firebase 서비스 초기화
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// 전역으로 사용할 수 있도록 window 객체에 추가
window.firebaseAuth = auth;
window.firebaseDb = db;
window.firebaseStorage = storage;

console.log('Firebase가 성공적으로 초기화되었습니다.');
