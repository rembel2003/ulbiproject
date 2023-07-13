import * as UserActionCreators from './users'
import * as TodoActionCreators from './todo'

export default {
    ...TodoActionCreators,
    ...UserActionCreators
}