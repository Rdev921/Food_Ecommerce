
import {styled} from "styled-components"
import { Link } from "react-router-dom";
import mcLogo from "./images/mc.png";
import vcLogo from "./images/vi.png";
import pcLogo from "./images/pp.png"
const Payment = () => {
  return (
    <DIV>
       <div className="container">
       <div className="header">
        <ul>
            <li className="active form-1-progressbar">
                <div>
                  <p>1</p>
                </div>
            </li>

            <li className="active form-2-progressbar">
                <div>
                <p>2</p>
                </div>
            </li>

            <li className="form-3-progressbar">
                <div>
                <p>3</p>
                </div>
            </li>
        </ul>
       </div>
       <div className="title">Confirm your Payment</div>
        <div className="first-row">
            <div className="owner">
            <span className="details">Name of the card holder <span className="star">*</span></span>
                <div className="input-field">
                    <input type="text" />
                </div>
            </div>
            <div className="cvv">
            <span className="details">CVV<span className="star">*</span></span>
                <div className="input-field">
                    <input type="password" />
                </div>
            </div>
        </div>
        <div className="second-row">
            <div className="card-number">
            <span className="details">Card Number <span className="star">*</span></span>
                <div className="input-field">
                    <input type="text" />
                </div>
            </div>
        </div>
        <div className="third-row">
        <span className="details">Expiry Date <span className="star">*</span></span>
            <div className="selection">
                <div className="date">
                    <select name="months" id="months">
                        <option value="Jan">Jan</option>
                        <option value="Feb">Feb</option>
                        <option value="Mar">Mar</option>
                        <option value="Apr">Apr</option>
                        <option value="May">May</option>
                        <option value="Jun">Jun</option>
                        <option value="Jul">Jul</option>
                        <option value="Aug">Aug</option>
                        <option value="Sep">Sep</option>
                        <option value="Oct">Oct</option>
                        <option value="Nov">Nov</option>
                        <option value="Dec">Dec</option>
                      </select>
                      <select name="years" id="years">
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
                      </select>
                </div>
                <div className="cards">
                    <img src={vcLogo} alt="" />
                    <img src={mcLogo} alt="" />
                    <img src={pcLogo} alt="" />
                </div>
            </div>    
        </div>
        <Link to="/">Confirm</Link>
    </div> 
    </DIV>
  )
}

export default Payment;

const DIV=styled.div`

    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);

    .header{
    margin-bottom:25px;
    display:flex;
    justify-content: center;
}

.header ul{
    display:flex;
}

.header ul li{
    position:relative;
    margin-right:50px;

}

.header ul li:last-child{
    margin-right:0;
}

.header ul li::before{
    content:"";
    position:absolute;
    top:40%;
    transform: translateY((-50%));
    left:55px;
    width:100%;
    height:2px;
    background:navy;


}

.header ul li:last-child::before{
    display:none;
}

.header ul li div{
    padding:5px;
    border-radius: 50%;

}

.header ul li p{
   width:50px;
   height:50px;
   background: rgb(207, 216, 220);
   color:white;
   text-align: center;
   line-height: 50px;
   border-radius: 50%;


}


.header ul li.active::before,
.header ul li.active p{
    background: rgb(92, 107, 192);
}


    .container{
    max-width: 750px;
    height:600px;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 40px;
    justify-content:space-around;
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
}

.container .title{
  font-size: 25px;
  font-weight: 500;
  position: relative;
  margin-bottom: 20px;
}


.first-row{
     display: flex;
}

.owner{
    width: 100%;
    margin-right: 40px;
}

.input-field{
    border: 1px solid #999;
}

.input-field input{
    height: 45px;
    width: 100%;
    outline: none;
    font-size: 16px;
    border-bottom-width: 2px;
    padding: 10px;
    transition: all 0.3s ease;

}

.owner, .cvv, .card-number{
    margin-bottom: 15px;
  
}

.selection{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.selection select{
    padding: 7px 20px;
    margin-right: 15px;
}

a{
    background-color: rgb(92, 107, 192);
    color: white;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    padding: 10px;
    font-size: 18px;
    transition: 0.5s;
    margin-top:20px;
}

a:hover{
    background-color: dodgerblue;
}

.cards img{
    width: 50px;
    margin-right:7px;
}


.details{
    display: block;
  font-weight: 400;
  margin-bottom: 5px;
  font-size:16px;
}

.star{
    color:rgb(244, 81, 30);
    font-size:16px;
    margin-left:1px;
  }

`
