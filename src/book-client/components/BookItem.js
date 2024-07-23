import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookItem = (props) => {   // props 에 book 이란 id? 이름? 이 있다.

    const {id, title, author} = props.book;

    return (
        <Card>
            <Card.Body>
                <Card.Title>{id}: {title}</Card.Title>
                <Link to={"/book/" + id} className="btn btn-primary">
                    상세보기
                </Link>
            </Card.Body>
        </Card>
    );
};

export default BookItem;