import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Loading from "../Loading";
import UserDisplay from "../UserDisplay";

const Search = (props, context) => {
    return (
        <div className="search">
            <div className="section">
                <h4 className="title">{context.t("Users")}</h4>
                {props.loading && <Loading />}
                {!props.loading &&
                    props.userList.length < 1 && (
                        <NotFound text={context.t("Nothing found :(")} />
                    )}
                <div className="content">
                    {!props.loading &&
                        props.userList.length > 0 && (
                            <RenderUserSearch userList={props.userList}/>
                    )}
                </div>
            </div>
            <div className="section">
                <h4 className="title">{context.t("Photos")}</h4>
                {props.loading && <Loading />}
                {!props.loading &&
                    props.imageList.length < 1 && (
                        <NotFound text={context.t("Nothing found :(")} />
                    )}
                <div className="content">
                    {!props.loading &&
                        props.imageList.length > 0 && (
                            <RenderImageSearch imageList={props.imageList} />
                        )}
                </div>
            </div>
        </div>
    );
};



const RenderUserSearch = props => (
    <div className="search">
        {props.userList.map(user => (
            <UserDisplay vertical={true} user={user} key={user.id}/>
        ))}
    </div>
);

const RenderImageSearch = props => props.imageList.map(photo => photo.caption);

const NotFound = props => <span className="not-found">{props.text}</span>;

Search.contextTypes = {
    t: PropTypes.func.isRequired
};

Search.propTypes = {
    loading: PropTypes.bool.isRequired,
    imageList: PropTypes.array,
    photoList: PropTypes.array
}

export default Search;