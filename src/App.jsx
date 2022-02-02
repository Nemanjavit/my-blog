import { db } from "./firebase";
import { setDoc, doc } from "firebase/firestore/lite";
import SignUpPage from "./pages/SignUpPage";
import { Routes, Route, Link } from "react-router-dom";
import "./css/main.css";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import RequireAuth from "./components/RequireAuth";
import HomePage from "./pages/HomePage";

function App() {
  // const [posts, setPosts] = useState();
  // const postRef = firestore.collection(`Posts/post`);
  // const [allPosts] = useCollectionData(postRef);

  // useEffect(() => {
  //   async function getCities(db) {
  //     const citiesCol = collection(db, "Posts");
  //     // const docs = await getDocs(citiesCol);
  //     console.log("col", citiesCol);
  //     // onSnapShot();
  //     // const cityList = citySnapshot.docs.map((doc) => doc.data());
  //   }
  //   getCities(db);
  // }, []);
  const addSomething = async () => {
    await setDoc(doc(db, "Posts", "post"), {
      text: "first post form vs code",
    });
  };

  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route element={<RequireAuth />}>
            <Route path="/home" element={<HomePage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
