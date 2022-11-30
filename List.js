import React, { useRef, useState } from 'react'
import { connect, } from 'react-redux';
import { addList, removeList, updateList, completeList } from '../redux/reducer';


const mapStateToProps = (state) => {
    return {
        List: state,
    };
};

const mapDispatchToProps = (Dispatch) => {
    return {
        addList: (obj) => Dispatch(addList(obj)),
        removeList: (id) => Dispatch(removeList(id)),
        updateList: (obj) => Dispatch(updateList(obj)),
        completeList: (id) => Dispatch(completeList(id)),
    };
};



const List = (props) => {
    const [list, setList] = useState("");

const Value = (props) => {
const[value, setValue]= useState("");
}

    const handleChange = (e) => {
        setList(e.target.value);
    }

    const add = () => {
        if (list === "") {
            alert("Input is invalid")
        } else {
            props.addList({
                id: Math.floor(Math.random() * 1000),
                item: list,
                completed: false,

            })
            setList("")
        }
    }
  console.log("props from store", props);

    return (
        <form  className='form'>
            <div className="row">
                <div className='addList'>
                    <input type="text" placeholder='name'
                        value={list}
                        className='listInput'
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="row">
                    <select name="area" id="area" className='listInput' defaultValue={"SELECT"} >
                        <option value="SELECT" disabled>Select City</option>
                        <option value="pune">Pune</option>
                        <option value="delhi">Delhi</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="nashik">Nashik</option>
                        <option value="nagpur">Nagpur</option>
                        <option value="ahemdabad">Ahemdabad</option>
                        <option value="solapur">Solapur</option>
                    </select>
                </div>
                <div className="row">
                    <select name="category" className='listInput' id="category" defaultValue={"SELECT"}>
                        <option value="SELECT" disabled>Select Category</option>
                        <option value="grocery">Grocery</option>
                        <option value="butcher">Butcher</option>
                        <option value="baker">Baker</option>
                        <option value="chemist">Chemist</option>
                        <option value="stationary">Staionary</option>
                    </select>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="text" className='listInput' placeholder='Opening ex: Monday-Friday' />
                    </div>
                    <div className="col">
                        <input type="text" className='listInput' placeholder='Opening ex: Sunday' />
                    </div>
                </div>
                <button className="add-btn"
                    onClick={() => add()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                </button>
                <br />
            </div>
        </form>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(List)