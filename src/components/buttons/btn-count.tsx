interface buttonInterface {
  value: string;
  classname?: string;
  onClick?: () => any;
}

export function Button(button: buttonInterface) {
  return (
    <button className={button.classname} onClick={button.onClick}>
      {button.value}
    </button>
  );
}
