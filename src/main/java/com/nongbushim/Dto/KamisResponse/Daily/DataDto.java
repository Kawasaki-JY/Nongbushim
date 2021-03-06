package com.nongbushim.Dto.KamisResponse.Daily;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DataDto {
    private String error_code;
    private List<DailyItemDto> item;
}
