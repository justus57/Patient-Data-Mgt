import { fullHeight, fullWidth } from '../util';
import Theme from './theme';

const { font, colors } = Theme;

const globalStyles = {
  title: {
    fontFamily: font.bold,
    fontSize: 30,
    color: colors.primary,
  },
  subTitle: {
    fontFamily: font.bold,
    fontSize: 20,
    color: colors.primary,
  },
  subTitleSecondary: {
    fontFamily: font.bold,
    fontSize: 20,
    color: colors.secondary,
  },
  caption: {
    fontFamily: font.regular,
    fontSize: 16,
    color: colors.text,
  },
  container: {
    flexDirection: 'column',
    marginHorizontal: 15,
    height: fullHeight,
    marginTop: 50,
  },
  buttonText: {
    fontFamily: font.bold,
    fontSize: 17,
    color: colors.primary,
  },
  input: {
    width: 240,
    fontFamily: font.regular,
  },
  modalBottomContainer: {
    width: fullWidth,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  modalRightButton: {
    backgroundColor: colors.primary,
    width: fullWidth / 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  closeButton: {
    backgroundColor: colors.secondary,
  },
  modalRightText: {
    color: colors.background,
    fontSize: 27,
  },
};

export default globalStyles;
