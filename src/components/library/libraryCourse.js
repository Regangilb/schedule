import React, { Component } from 'react'
import Icon from '../icon'

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
            <label className="library-course__title"> Problem Solving</label>
            { Icon('fas fa-check', 'library-course-') }

            { Icon('<i class="fas fa-plus-circle" ></i>')}

            <div className="library-course__description">
            <label> Course Description</label>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus odio, egestas et scelerisque sit amet, maximus eu eros. Integer mauris ex, egestas at sem eget, vehicula tincidunt metus.</p>
            </div>
         </div>
        )
    }
}

export default LibraryCourse;