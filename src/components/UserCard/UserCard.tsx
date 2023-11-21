import { Avatar, Box, Link, Paper, Typography } from '@mui/material';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
import PlaceIcon from '@mui/icons-material/Place';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useUserInfo } from '../../store/UserInfoContext';
import { capitalizeFirstLetter } from '../../utils/textFormatters';
import colors from '../../styles/colors';

const UserCard = () => {
  const { userInfo } = useUserInfo();

  const joiningFullDate = new Date(userInfo.created_at);
  const day = joiningFullDate.getDate();
  const month = joiningFullDate.toLocaleString('default', { month: 'short' });
  const year = joiningFullDate.getFullYear();
  const joiningDate = `${day} ${capitalizeFirstLetter(month)} ${year}`;

  return(
    <section>
      <Paper
        elevation={10}
        sx={{
          backgroundColor: colors.backgroundLightBlue,
          border: 0,
          borderRadius: '8px',
          display: userInfo.login ? 'flex' : 'none',
          marginTop: '1rem',
          padding: '2rem',
        }}
      >
        {/* ==================== U S E R   A V A T A R ==================== */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: '0.5rem',
            width: '20%',
          }}
        >
          <Avatar alt={userInfo.login} src={userInfo.avatar_url} sx={{ height: '90px', width: '90px' }} />
        </Box>

        {/* ==================== U S E R   I N F O ==================== */}
        <Box
          sx={{
            color: colors.white,
            width: '80%',
          }}
        >
          {/* ==================== BASIC INFO ==================== */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '1rem',
            }}
          >
            <Typography
              sx={{
                width: '60%',
              }}
              variant='headline2'
            >
              {userInfo.login || 'User not found'}
            </Typography>

            {userInfo.created_at && <Typography>{`Joined ${joiningDate}`}</Typography>}
          </Box>
          
          <Link
            href={userInfo.html_url}
            target='_blank'
            underline='none'
          >
            <Typography sx={{ color: colors.blue, marginBottom: '0.5rem' }}>
              {`@${userInfo.name || userInfo.login}`}
            </Typography>
          </Link>

          <Typography>{userInfo.bio || 'This profile has no bio'}</Typography>

          {/* ==================== DATA SECTION ==================== */}
          <Box
            sx={{
              alignContent: 'center',
              bgcolor: colors.backgroundDark,
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-around',
              margin: '1.5rem 0',
              padding: '1rem 2rem',
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography sx={{ fontWeight: 'bold' }}>Repos</Typography>
              <Typography>{userInfo.public_repos || 0}</Typography>
            </Box>

            <Box sx={{ textAlign: 'center' }}>
              <Typography sx={{ fontWeight: 'bold' }}>Followers</Typography>
              <Typography>{userInfo.followers || 0}</Typography>
            </Box>

            <Box sx={{ textAlign: 'center' }}>
              <Typography sx={{ fontWeight: 'bold' }}>Following</Typography>
              <Typography>{userInfo.following || 0}</Typography>
            </Box>
          </Box>

          {/* ==================== LINK'S SECTION ==================== */}
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <Box sx={{ width: '50%' }}>
              <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                <PlaceIcon htmlColor={colors.labelLightBlue} />
                {userInfo.location ? 
                  <Link
                    href={`https://www.google.com.mx/maps/search/${userInfo.location}`}
                    target='_blank'
                    underline='none'
                  >
                    <Typography sx={{ color: colors.white }}>
                      {userInfo.location}
                    </Typography>
                  </Link>
                :
                  <Typography sx={{ color: colors.labelLightBlue }}>
                    Not Available
                  </Typography>
                }
              </Box>

              <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                <TwitterIcon htmlColor={colors.labelLightBlue} />
                {userInfo.twitter_username ?
                  <Link
                    href={`https://twitter.com/${userInfo.twitter_username}`}
                    target='_blank'
                    underline='none'
                  >
                    <Typography sx={{ color: colors.white }}>
                      {userInfo.twitter_username}
                    </Typography>
                  </Link>
                :
                  <Typography sx={{ color: colors.labelLightBlue }}>
                    Not Available
                  </Typography>
                }
              </Box>              
            </Box>

            <Box sx={{ width: '50%' }}>
              <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                <LinkRoundedIcon htmlColor={colors.labelLightBlue} />
                {userInfo.email ?
                  <Link
                    href={`https://www.google.com/search?q=${encodeURIComponent(userInfo.email)}`}
                    target='_blank'
                    underline='none'
                  >
                    <Typography sx={{ color: colors.white }}>
                      {userInfo.email}
                    </Typography>
                  </Link>
                :
                  <Typography sx={{ color: colors.labelLightBlue }}>
                    Not Available
                  </Typography>
                }
              </Box>

              <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                <ApartmentRoundedIcon htmlColor={colors.labelLightBlue} />
                {userInfo.company ?
                  <Link
                    href={`https://www.google.com/search?q=${encodeURIComponent(userInfo.company)}`}
                    target='_blank'
                    underline='none'
                  >
                    <Typography sx={{ color: colors.white }}>
                      {userInfo.company || 'Not Available'}
                    </Typography>
                  </Link>
                :
                  <Typography sx={{ color: colors.labelLightBlue }}>
                    Not Available
                  </Typography>
                }
              </Box>              
            </Box>
          </Box>
        </Box>
      </Paper>
    </section>
  );
};

export default UserCard;
