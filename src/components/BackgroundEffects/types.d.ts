interface ISize {
  width: number;
  height: number;
}
interface IPos {
  top: number;
  right: number;
}

interface IBlurredObjectProps {
  size?: ISize = { width: 200, height: 200 };
  pos?: IPos;
}
