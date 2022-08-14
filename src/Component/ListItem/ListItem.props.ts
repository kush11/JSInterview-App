export interface ListItemProps {
  item: any;
  bookMarkClick: (value: string) => void;
  listClick: (value: string) => void;
  isBookMark?: boolean;
}
