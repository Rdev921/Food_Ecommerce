
import {styled} from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleRight} from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from "react-router-dom";
const Checkout = () => {
const navigate = useNavigate()

const goup = () => {
navigate("/payment")
}

  return (
    <DIV>
     

    <div className="container">
    <div className="header">
        <ul>
            <li className="active form-1-progressbar" >
                <div>
                  <p>1</p>
                </div>
            </li>

            <li className="form-2-progressbar">
                <div onClick={goup}>
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

    <div className="title">Address Details</div>
    <div className="content">
      <form action="#" onSubmit={goup}>
        <div className="user-details">

          <div className="input-box">
            <span className="details">Flat No./House Name <span className="star">*</span></span>
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className="input-box">
            <span className="details">Street Name <span className="star">*</span></span>
            <input type="text" placeholder="Enter your username" required />
          </div>

          <div className="input-box">
            <span className="details">Locality <span className="star">*</span></span>
            <input type="text" placeholder="Enter your email" required />
          </div>

          <div className="input-box">
            <span className="details">City <span className="star">*</span></span>
            <input type="text" placeholder="Enter your number" required />
          </div>

          <div className="input-box">
            <span className="details">District <span className="star">*</span></span>
            <input type="text" placeholder="Enter your password" required />
          </div>

          <div className="input-box">
            <span className="details">State <span className="star">*</span></span>
            <input type="text" placeholder="Confirm your password" required />
          </div>

          <div className="input-box">
            <span className="details">Mobile Number <span className="star">*</span></span>
            <input type="text" placeholder="Confirm your password" required />
          </div>

          <div className="input-box">
            <span className="details">Pin Code <span className="star">*</span></span>
            <input type="text" placeholder="Confirm your password" required />
          </div>

        </div>

        <div className="button">
          <input type="submit" value="Proceed to Payment" /> 
        </div>

      </form>

    </div>
    </div>
  </DIV>
  )
}

export default Checkout;


const DIV=styled.div`


  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);

  .header{
    margin-bottom:35px;
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
  max-width  :800px ;
  height: 100%;
  background-color: #fff;
  padding: 25px 30px;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.15);
}

.container .title{
  font-size: 25px;
  font-weight: 500;
  position: relative;
}

/* .container .title::before{
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 30px;
  border-radius: 5px;
  background: navy;
} */

.content form .user-details{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0 12px 0;
}

form .user-details .input-box{
  margin-bottom: 15px;
  width: calc(100% / 2 - 20px);
}
form .input-box span.details{
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
}
.user-details .input-box input{
  height: 45px;
  width: 100%;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 15px;
  border: 1px solid #ccc;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}
.user-details .input-box input:focus,
.user-details .input-box input:valid{
  border-color: #9b59b6;
}

form .button{
   height: 35px;
   margin: 35px 0
 }

 form .button input{
   
   height: 100%;
   width: 100%;
   border-radius: 5px;
   border: none;
   color: #fff;
   font-size: 18px;
   font-weight: 500;
   letter-spacing: 1px;
   cursor: pointer;
   transition: all 0.3s ease;
   background: rgb(92, 107, 192);

 }

 form .button input:hover{
  /* transform: scale(0.99); */
  background: dodgerblue;
  }

  .star{
    color:rgb(244, 81, 30);
    font-size:16px;
    margin-left:1px;
  }

  //media query
  @media(max-width: 584px){
 .container{
  max-width: 100%;
}
form .user-details .input-box{
    margin-bottom: 15px;
    width: 100%;
  }
  form .category{
    width: 100%;
  }
  .content form .user-details{
    max-height: 300px;
    overflow-y: scroll;
  }
  .user-details::-webkit-scrollbar{
    width: 5px;
  }
  }
  @media(max-width: 459px){
  .container .content .category{
    flex-direction: column;
  }
}


`
    