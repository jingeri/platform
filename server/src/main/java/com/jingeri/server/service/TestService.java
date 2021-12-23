package com.jingeri.server.service;

import com.jingeri.server.mapper.TestMapper;
import com.jingeri.server.pojo.Test;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class TestService {
    @Resource
    private TestMapper testMapper;

    public List<Test> list() {
        return testMapper.selectByExample(null);
    }

    public int deleteByPrimaryKey(String id) {
        return testMapper.deleteByPrimaryKey(id);
    }

    public int insert(Test record) {
        return testMapper.insert(record);
    }

    public int insertSelective(Test record) {
        return testMapper.insertSelective(record);
    }

    public Test selectByPrimaryKey(String id) {
        return testMapper.selectByPrimaryKey(id);
    }

    public int updateByPrimaryKeySelective(Test record) {
        return testMapper.updateByPrimaryKeySelective(record);
    }

    public int updateByPrimaryKey(Test record) {
        return testMapper.updateByPrimaryKey(record);
    }
}

