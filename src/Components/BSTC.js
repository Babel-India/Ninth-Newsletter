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
                       <th>Laharsh Kushwah</th>
                       <th>38</th>
                       <th>Akash Daharan</th>
                       <th>38</th>
                   </tr>
                   <tr>
                       <th>Aaditya Awasthi</th>
                       <th>37</th>
                       <th>Arjun Eriyat</th>
                       <th>36</th>
                   </tr>
                   <tr>
                       <th>Rajan Patil</th>
                       <th>36</th>
                       <th>Anuraag Tiwari</th>
                       <th>35</th>
                   </tr>
                   <tr>
                       <th>Dhruv Mehta</th>
                       <th>35</th>
                       <th>Bhavya Singh</th>
                       <th>34</th>
                   </tr>
                   <tr>
                       <th>Namrata Mishra</th>
                       <th>34</th>
                       <th></th>
                       <th></th>
                   </tr>
</table>
            </Container>
        </div>
  );
};

export default BSTC;
