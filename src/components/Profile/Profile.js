import "../../css/Payment/Pay.css";
import Book from '../../img/book1.png'
import { FaMoneyBillWave } from "react-icons/fa";
import logo from '../../img/logo.png'
import {app, auth, db} from '../Firebase';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs } from "firebase/firestore";
import { Footer } from '../Layout/BookFooter';
import { NavDetail } from '../Detail-book/NavDetail';
import { FaGreaterThan, FaPlusCircle, FaLongArrowAltRight, FaSearch, FaEdit } from "react-icons/fa";

export function Profile({user_info}) {

    const [user, setUser] = useState([]);
    const {uid} = useParams();

    // const getInfo = async () => {
    //     try {
    //         const q = query(collection(db, "users"), where("uid", "==", uid));
    //         const querySnapshot = await getDocs(q);
    //         let data = [];
    //         querySnapshot.forEach((doc) => {
    //             data.push(doc.data());
    //             console.log(doc.data)
    //         })
    //         return data[0];
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     getInfo().then((data) => {
    //         setUser(data);
    //         console.log(data);
    //     })
    // }, [])

    return (
        <div className='Profile'>
            <NavDetail />
            <div className="name-category">
                <span><img src={user_info.photoURL}/></span>
                <span>
                    <p className="name-category-text">
                        {user_info.displayName}
                    </p>
                </span>
            <div className="Blog-contain">
                <div className="Blog-left">
                    <img className="Blog-img" src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/blog_7-1125x540.jpg" alt="Book"></img>
                    <br/>
                    <span className="Blog-date">December 2,2022 /</span>
                    <span className="Blog-Author">By Thanh Hieu</span> <br/>
                    <a className="Blog-Title" href="/">5 Attractive Bookstore WordPress Themes</a>
                    <p className="Blog-Content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat […]
                    </p>
                    <a className="Blog-Viewmore" href="/">
                        View More
                        <FaGreaterThan /> 

                    </a>
                    <hr/>


                    {/* test */}
                    <img className="Blog-img" src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/blog_7-1125x540.jpg" alt="Book"></img>
                    <br/>
                    <span className="Blog-date">December 2,2022 /</span>
                    <span className="Blog-Author">By Thanh Hieu</span> <br/>
                    <a className="Blog-Title" href="/">5 Attractive Bookstore WordPress Themes</a>
                    <p className="Blog-Content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat […]
                    </p>

                </div>
                <div className="Blog-right">
                    <div className="Create-Blog">
                        <p>Create Blogs</p>
                        <button className="btn-create-blog">
                            <b className="btn-create">Create</b>
                            <FaPlusCircle />
                        </button>


                        <p>Tạo data xóa dòng này đi: tạo blog bao gồm title, 1 hình nền, tên tác giả, ngày khởi tạo , nội dung</p>
                    </div>
                    <div className="Create-Blog Edit-profile">
                        <p>Edit profile</p>
                        <button className="btn-create-blog btn-edit-profile">
                            <b className="btn-create">Edit</b>
                            <FaEdit />
                        </button>
                    </div>
                    <div className="Search-Blog">
                        <p>Search Blogs</p>

                            <input className="ip-Search-blog" type="text" placeholder="Search"/>
                            <FaSearch />
                        
                    </div>
                </div>
            </div>                     
        </div>
        
            <Footer />
        </div>
    );
}