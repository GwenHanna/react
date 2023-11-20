interface buttonInterface {
  value: string;
  onClick?: (e: any) => any;
}

export function ButtonCount(button: buttonInterface) {
  return <button onClick={button.onClick}>{button.value}</button>;
}
