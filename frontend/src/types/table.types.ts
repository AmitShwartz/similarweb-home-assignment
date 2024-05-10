export interface Column<T> {
  id: string;
  header: string;
  footer?: string;
  Component?: React.FC<T>;
  isNumeric?: boolean;
}
