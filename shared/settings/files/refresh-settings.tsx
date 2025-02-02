import * as React from 'react'
import * as Container from '../../util/container'
import * as FsGen from '../../actions/fs-gen'

type OwnProps = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  refresh: () => dispatch(FsGen.createLoadSettings()),
})

const mergeProps = (_, d, __: OwnProps) => ({
  refresh: d.refresh,
})

type Props = {
  refresh: () => void
}

class Component extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.refresh()
  }
  render() {
    return null
  }
}

export default Container.connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component)
