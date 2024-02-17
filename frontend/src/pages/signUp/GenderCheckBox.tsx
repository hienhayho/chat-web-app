interface GenderCheckBoxProps {
    onCheckBoxChange: (gender: string) => void;
    selectedGender: string;
}

const GenderCheckBox = (props: GenderCheckBoxProps) => {
    const { onCheckBoxChange, selectedGender } = props

    return (
        <div className="flex justify-around mt-2">
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
                    <span className="lebel-text">Male</span>
                    <input
                        type="checkbox"
                        className="checkbox border-sky-900"
                        checked={selectedGender === "male"}
                        onChange={() => onCheckBoxChange("male")}
                    />
                </label>
            </div>
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
                    <span className="lebel-text">Female</span>
                    <input
                        type="checkbox"
                        className="checkbox border-sky-900"
                        checked={selectedGender === "female"}
                        onChange={() => onCheckBoxChange("female")}
                    />
                </label>
            </div>
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender === "other" ? "selected" : ""}`}>
                    <span className="lebel-text">Other</span>
                    <input
                        type="checkbox"
                        className="checkbox border-sky-900"
                        checked={selectedGender === "other"}
                        onChange={() => onCheckBoxChange("other")}
                    />
                </label>
            </div>
        </div>
    )
};

export default GenderCheckBox;
