import { useEffect, useState } from "react"
import { commentUpdate, commentDelete } from "./redux/actions"
import { useDispatch } from "react-redux/es/exports"

function SingleComment({data}) {
    const {text, id} = data
    const [commentText, setCommentText] = useState('')
    const dispatch = useDispatch()

    const handleInput = e => {
        setCommentText(e.target.value)
    }

    const handleUpdate = e => {
        e.preventDefault()
        dispatch(commentUpdate(commentText, id))
    }

    const handleDelete = e => {
        e.preventDefault()
        dispatch(commentDelete(id))
    }

    useEffect(() => {
        if (text){
            setCommentText(text)
        }
    }, [text])

    return (
        <form className="comments-item" onSubmit={handleUpdate}>
            <div className="comments-item-delete" onClick={handleDelete}>&times;</div>
            <input type='text' value={commentText} onChange={handleInput}/>
            <input type='submit' hidden />
        </form>
    )
}

export default SingleComment