import {FaCodepen, FaStore, FaUserFriends, FaUsers, FaMapMarkerAlt, FaGlobe, FaTwitter} from 'react-icons/fa'
import Spinner from '../components/layout/Spinner'
import {useEffect, useContext} from 'react'
import {useParams, Link} from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'
import RepoList from '../components/repos/RepoList'
import {getUserAndRepos} from '../context/github/GithubActions'

function User() {
  const {user, loading, repos, dispatch} = useContext(GithubContext)

  const params = useParams()

  useEffect(() => {
    dispatch({type: 'SET_LOADING'})
    const getUserData = async () => {
      const userData = await getUserAndRepos(params.login)
      dispatch({type: 'GET_USER_AND_REPOS', payload: userData})  
    }

    getUserData()
  }, [dispatch, params.login])

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user

  if(loading) {
    return <Spinner />
  }
  return (
    <>
      <div className='w-full mx-auto lg:w-10/12'>
        <div className='mb-4'>
          <Link to='/' className='btn btn-primary'>
            Back To Search
          </Link>
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
          <div className='custom-card-image mb-6 md:mb-0'>
            <div>
              <img
                className='rounded-lg shadow-xl image-full'
                src={avatar_url}
                alt='avatar'
              />
            </div>
          </div>

          <div className='col-span-2'>
            <div className='mb-6'>
              <h1 className='text-3xl card-title whitespace-nowrap'>
                {name}
                <span className='hidden xl:inline lg:inline md:inline'>
                  ({login})
                </span>
                <div className='ml-2 mr-1 badge badge-success badge-md xl:badge-lg lg:badge-lg md:badge-sm'>
                  {type}
                </div>
                {hireable && (
                  <div className='badge badge-info badge-md xl:badge-lg lg:badge-lg md:badge-sm'>
                    Hireable
                  </div>
                )}
              </h1>
              <span className='text-xl xl:hidden lg:hidden md:hidden'>
                ({login})
              </span>
              <p>{bio}</p>

              <div className='mt-4 card-actions'>
                <a
                  href={html_url}
                  target='_blank'
                  rel='noreferrer'
                  className='btn btn-primary btn-outline'
                >
                  Visit Github Profile
                </a>
              </div>
            </div>

            <div className='container mx-auto'>
              <div className='w-full rounded-lg bg-base-100 grid grid-cols-1 gap-2 xl:grid-cols-3 xl:gap-2 lg:grid-cols-32 lg:gap-2 md:grid-cols-2 md:gap-2'>
                {location && (
                  <div className='stat shadow-md shadow-base-300'>
                    <div className='stat-title text-md grid grid-cols-2'>
                      Location
                      <span className='grid justify-end'>
                        <FaMapMarkerAlt className='text-blue-500' />
                      </span>
                    </div>
                    <div className='text-lg stat-value'>{location}</div>
                  </div>
                )}

                {blog && (
                  <div className='stat shadow-md shadow-base-300'>
                    <div className='stat-title text-md grid grid-cols-2'>
                      Website
                      <span className='grid justify-end'>
                        <FaGlobe className='text-blue-500' />
                      </span>
                    </div>
                    <div className='text-lg stat-value'>
                      <a
                        href={`https://${blog}`}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {blog}
                      </a>
                    </div>
                  </div>
                )}

                {twitter_username && (
                  <div className='stat shadow-md shadow-base-300'>
                    <div className='stat-title text-md grid grid-cols-2'>
                      Twitter
                      <span className='grid justify-end'>
                        <FaTwitter className='text-blue-500' />
                      </span>
                    </div>
                    <div className='text-lg stat-value'>
                      <a
                        href={`https://twitter.com/${twitter_username}`}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {twitter_username}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className='container mx-auto'>
          <div className='w-full rounded-lg bg-base-100 grid grid-cols-1 gap-2 xl:grid-cols-4 xl:gap-2 lg:grid-cols-4 lg:gap-2 md:grid-cols-2 md:gap-2'>
            {/* start of items */}
            <div className='stat shadow-md shadow-base-300'>
              <div className='stat-figure text-blue-500'>
                <FaUsers className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Followers</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {followers}
              </div>
            </div>

            <div className='stat shadow-md shadow-base-300'>
              <div className='stat-figure text-blue-500'>
                <FaUserFriends className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Following</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {following}
              </div>
            </div>

            <div className='stat shadow-md shadow-base-300'>
              <div className='stat-figure text-blue-500'>
                <FaCodepen className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Public Repos</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {public_repos}
              </div>
            </div>

            <div className='stat shadow-md shadow-base-300'>
              <div className='stat-figure text-blue-500'>
                <FaStore className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Public Gists</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {public_gists}
              </div>
            </div>
            {/* end of items */}
          </div>
        </div>

        <RepoList repos={repos} />
      </div>
    </>
  )
}

export default User