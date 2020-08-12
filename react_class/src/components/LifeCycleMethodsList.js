import React, {Component} from "react"

class LifeCycleMethodsList extends Component {
  constructor() {
    super()
    this.state = {}
  }

  static getDerivedStateFromProps() {
    // return the new, updated state based upon the props
    // not recommended
  }

  getSnapshotBeforeUpdate() {
    // create a backup of the current way things are
  }

  // componentWillMount() {
  //   // deprecated
  // }

  componentDidMount() {

  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.whatever !== this.props.whatever) {
  //     // do something
  //     // this method is deprecated
  //   }

  // }

  shouldComponentUpdate(nextProps, nextState) {
    // return true if you want it to update
    // return false if not
  }

  componentDidUpdate

  // componentWillUpdate() {
  //   // deprecated
  // }

  componentWillUnmount() {
    // clean up after the component goes eg removing an event listener
  }

  render() {
    return (
      <div>
        Code goes here
      </div>
    )
  }
}

export default LifeCycleMethodsList