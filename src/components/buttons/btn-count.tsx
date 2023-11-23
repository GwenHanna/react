interface buttonInterface {
  value: string;
  classname?: string;
  onClick?: () => any;
}

export function Button({ value, classname, onClick }: buttonInterface) {
  return (
    <button className={classname} onClick={onClick}>
      {value}
    </button>
  );
}
