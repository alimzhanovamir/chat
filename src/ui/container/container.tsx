import "./container.scss";

type ContainerProps = {
    children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => (
    <div className="container">
        {children}  
    </div>
);