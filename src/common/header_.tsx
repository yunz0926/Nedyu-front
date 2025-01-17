import { createStyles, Header, Autocomplete, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const useStyles = createStyles((theme) => ({
  header: {
    position: "fixed",
    top: 0,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    flexGrow: 1,
    display: "flex",
    width: "100%",
  },

  inner: {
    height: 100,
    display: "flex",
    width: "100%",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  search: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

interface HeaderSearchProps {
  links?: { link: string; label: string }[];
}

const HeaderSearch = ({ links }: HeaderSearchProps) => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const auth = false;

  const onClickHome = () => {
    navigate("/");
  };

  return (
    <Header height={56} className={classes.header} mb={120}>
      <div className={classes.inner}>
        <Group>
          <div
            onClick={onClickHome}
            style={{
              fontWeight: 700,
              fontSize: "40px",
            }}
          >
            Nedyu
          </div>
        </Group>
        {!auth ? (
          <>
            <AuthButton
              onClick={() => {
                navigate("/signin");
              }}
              style={{ right: "110px" }}
            >
              로그인
            </AuthButton>
            <AuthButton
              onClick={() => {
                navigate("/signup");
              }}
            >
              회원가입
            </AuthButton>
          </>
        ) : (
          <AuthButton>로그아웃</AuthButton>
        )}
      </div>
    </Header>
  );
};

const AuthButton = styled.div`
  position: absolute;
  right: 30px;
  padding: 0px 5px;
  height: 30px;
  line-height: 30px;
  color: white;
  text-align: center;
  font-weight: 700px;
  background: #ffd751;
  border-radius: 10px;

  cursor: pointer;
`;
export default HeaderSearch;
