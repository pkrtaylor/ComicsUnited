import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'


const Results = ({profile}) => {
    return (
        <div>
            Hello
        </div>
    )
}

Results.propTypes = {
    profile: PropTypes.object.isRequired
}

 const mapStateToProps = state => ({
    profile: state.profile
 }) 

export default connect(mapStateToProps)(Results)


