import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

function RepoList({repos}) {
  return (
    <div className='rounded-lg card bg-base-100 mt-4 xl:mt-8 lg:mt-8 md:mt-6'>
      <div className="">
        <h2 className="text-3xl my-4 font-bold card-title">Latest Repositories</h2>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  )
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired
}

export default RepoList