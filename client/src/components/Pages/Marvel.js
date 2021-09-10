import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getResults} from '../../actions/profile'

const Marvel = ({getResults}) => {

    const [formData, setFormData] = useState(
        {
            name:''
        }
    );
    
    const { name } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value})

    const onSubmit = e =>{
        e.preventDefault();
        
        getResults(formData);
       
    }
    return (
       
        <div className='hero-container'>
            <video src='/videos/CapAm.mp4' autoPlay loop muted />
            <form className=''onSubmit ={e => onSubmit(e)}>
                <input type="text" placeholder=" Name" name="name" value={name} onChange={onChange} />
                
                <input type="submit" /> 
              
            </form>
        </div>
   
    )
}


Marvel.propTypes= {
    getResults: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps= state =>({
    profile: state.profile
})

export default connect(mapStateToProps, {getResults})(Marvel)



