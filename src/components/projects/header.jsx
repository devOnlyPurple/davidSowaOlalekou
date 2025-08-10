function Header({ title }) {
    const HeadingTag = title ? "h2" : "h1";

    return (
        <header className="pg-text-lg pt-80px">
            <div className="container pt-80px">
                <div className="caption text-align-center">
                    <HeadingTag>{title || "Projets"}</HeadingTag>
                </div>
            </div>
        </header>
    );
}

export default Header;
