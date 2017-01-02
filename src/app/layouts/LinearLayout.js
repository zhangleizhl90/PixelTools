/**
 * Created by zhanglei on 2017/1/2 0002.
 */

export class LinearLayout extends React.Component {
    render() {

        let children = this.props.children;
        children.forEach((child) => {

        });

        return (
            <div className="linear-layout">
                {children}
            </div>
        );
    }
}