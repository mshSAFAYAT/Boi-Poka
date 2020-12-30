import React from "react";

const Pagination = (props) => {
    console.log(props.totalPages);
    const page_links = [];
    for (let i = 1; i <= props.totalPages; i++) {
        let isActive;
        if (props.currentPage == i) {
            isActive = "active";
        } else {
            isActive = "";
        }

        let classes = "wave-effect " + isActive;
        page_links.push(
            <button
                className={classes}
                key={i}
                onClick={() => {
                    props.nextPage(i);
                }}
            >
                {i}
            </button>
        );
    }
    return (
        <div className="container" style={{position: 'absolute', left: '50%', right: '50%', textAlign:"center",
        transform: 'translate(-50%, -50%)'}}>
            <div className="row">{page_links}</div>
        </div>
    );
};

export default Pagination;