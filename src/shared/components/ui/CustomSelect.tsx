import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";

interface IKeys {
  id: string;
  name: string;
}

interface selectProps {
  handleChange: (params: any) => any;
  labelName: string;
  value: string;
  options: Array<IKeys>;
  isDisabled: boolean;
  showCross?: boolean;
  onCrossClick?: (params: any) => any;
}

export default function CustomSelect({
  handleChange,
  labelName,
  value,
  options,
  isDisabled,
  showCross = true,
  onCrossClick 
}: selectProps) {
  return (
    <Box sx={{ minWidth: 120 , display:'flex', gap:'1rem'}}>
      <FormControl fullWidth>
        <InputLabel id="category">{labelName}</InputLabel>
        <Select
          labelId="category"
          id="select-"
          value={value || ""}
          label="Category"
          disabled={isDisabled}
          onChange={handleChange}
        >
          {options.map((eachOption: IKeys) => {
            return (
              <MenuItem key={eachOption.id} value={eachOption.id}>
                {eachOption.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {showCross && <Button variant="contained" onClick={onCrossClick}>X</Button> }
    </Box>
  );
}
