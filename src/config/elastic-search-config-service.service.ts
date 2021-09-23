import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ElasticsearchModuleOptions, ElasticsearchOptionsFactory } from '@nestjs/elasticsearch';

@Injectable()
export class ElasticSearchConfigServiceService implements ElasticsearchOptionsFactory{
    constructor(private readonly configService: ConfigService) {}

    createElasticsearchOptions(): ElasticsearchModuleOptions {
        return this.configService.get('elasticsearch')
    }
}
