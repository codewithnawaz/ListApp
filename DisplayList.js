import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addList, removeList, updateList, completeList } from '../redux/reducer';
import ListItem from './ListItem';

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


const DisplayList = (props) => {
    const [sort, setSort] = useState("active")
    return (
        <div className="dispalyList">
            <div className="buttons">
                <button onClick={() => setSort("active")}>Active</button>
                <button onClick={() => setSort("Completed")}>Completed</button>
                <button onClick={() => setSort("all")}>All</button>
            </div>
            <ul>
                {
                    props.List.length > 0 && sort === "active" ?
                        props.List.map(item => {
                            return (
                                item.completed === false &&
                                <ListItem
                                    key={item.id}
                                    item={item}
                                    removeList={props.removeList}
                                    updateList={props.updateList}
                                    completeList={props.completeList}
                                />
                            )
                        })
                        : null}

                {
                    props.List.length > 0 && sort === "completed"
                        ?props.List.map((item) => {
                            return (
                                item.completed === true &&
                                <ListItem
                                    key={item.id}
                                    item={item}
                                    removeList={props.removeList}
                                    updateList={props.updateList}
                                    completeList={props.completeList}
                                />
                            );
                        })
                        : null}

                {
                    props.List.length > 0 && sort === "all" ?
                        props.List.map(item => {
                            return (
                                <ListItem
                                    key={item.id}
                                    item={item}
                                    removeList={props.removeList}
                                    updateList={props.updateList}
                                    completeList={props.completeList}
                                />
                            )
                        })
                        : null}


            </ul>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayList);