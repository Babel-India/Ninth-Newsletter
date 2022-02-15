import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Styles/BSTC.css";
const BSTC = () => {
  return (
    <div id="BSTC" className='bstc'> 
            <h1 className='bstc-head'>Babel Software Testing Certification Champions</h1>
            <h3 className='bstc-intro'>There are always new, grander challenges to confront, and a true winner will embrace each one.</h3>
            <Container>
               <h1 className='bstc-name'>January, 2022</h1>

               <table className="bstc-table">
                   <tr>
                       <th>Name</th>
                       <th>Marks</th>
                       <th>Name</th>
                       <th>Marks</th>
                   </tr>
                   <tr>
                       <th>Kripesh Nayak</th>
                       <th>39</th>
                       <th>Shaikh Ezaz Ahamed</th>
                       <th>39</th>
                   </tr>
                   <tr>
                       <th>Rahul Solanki</th>
                       <th>39</th>
                       <th>Saurav Suman</th>
                       <th>38</th>
                   </tr>
                   <tr>
                       <th>Aman Rawat</th>
                       <th>37</th>
                       <th>Melvin Chacko</th>
                       <th>37</th>
                   </tr>
                   <tr>
                       <th>Akash Kumar</th>
                       <th>36</th>
                       <th>Ishaan Sharma</th>
                       <th>35</th>
                   </tr>
                   <tr>
                       <th>Shorya Chauhan</th>
                       <th>35</th>
                       <th>Chinmay Girish Kawale</th>
                       <th>34</th>
                   </tr>
                   <tr>
                       <th>Akash Rajiv Puranik</th>
                       <th>34</th>
                       <th>Rohan Karir</th>
                       <th>33</th>
                   </tr>
                   <tr>
                       <th>Kamal Swami</th>
                       <th>32</th>
                       <th></th>
                       <th></th>
                   </tr>
</table>
            </Container>
        </div>
  );
};

export default BSTC;
